"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import formJson from "../data/formData";

interface FormData {
  [key: string]: string | number | boolean;
}

export default function DynamicForm() {
  const { control, handleSubmit } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData | null>(null);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const existingData = localStorage.getItem("formData");
    let updatedData = [];

    if (existingData) {
      updatedData = JSON.parse(existingData);
      if (Array.isArray(updatedData)) {
        updatedData.push(data);
      } else {
        updatedData = [updatedData, data];
      }
    } else {
      updatedData = [data];
    }

    localStorage.setItem("formData", JSON.stringify(updatedData));

    setFormData(data);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {formJson.data.map((field) => {
          switch (field.fieldType) {
            case "TEXT":
              return (
                <Controller
                  key={field.id}
                  name={field.name}
                  control={control}
                  defaultValue={field.defaultValue || ""}
                  rules={{ required: field.required }}
                  render={({ field: controllerField }) => (
                    <TextField
                      {...controllerField}
                      label={field.name}
                      className="w-full"
                      sx={{ marginY: 2 }}
                    />
                  )}
                />
              );
            case "LIST":
              return (
                <FormControl
                  key={field.id}
                  className="w-full"
                  sx={{ marginY: 2 }}
                >
                  <FormLabel>{field.name}</FormLabel>
                  <Controller
                    name={field.name}
                    control={control}
                    defaultValue={field.defaultValue || ""}
                    render={({ field: controllerField }) => (
                      <Select
                        value={controllerField.value}
                        onChange={controllerField.onChange}
                        className="w-full"
                      >
                        {field?.listOfValues1?.map((option) => (
                          <MenuItem
                            key={`${field.id}-${option}`}
                            value={option}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              );
            case "RADIO":
              return (
                <FormControl
                  key={field.id}
                  className="w-full"
                  sx={{ marginY: 2 }}
                >
                  <FormLabel>{field.name}</FormLabel>
                  <Controller
                    name={field.name}
                    control={control}
                    defaultValue={field.defaultValue || ""}
                    render={({ field: controllerField }) => (
                      <RadioGroup
                        value={controllerField.value}
                        onChange={controllerField.onChange}
                        className="space-y-2"
                      >
                        {field?.listOfValues1?.map((option) => (
                          <FormControlLabel
                            key={`${field.id}-${option}`}
                            value={option}
                            control={<Radio />}
                            label={option}
                          />
                        ))}
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              );
            default:
              return null;
          }
        })}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Submit
        </Button>
      </form>
      {formData && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold">Submitted Data:</h3>
          <pre className="mt-2 bg-gray-100 p-2 rounded">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
