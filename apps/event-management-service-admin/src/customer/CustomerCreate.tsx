import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="events" reference="Event">
          <SelectArrayInput
            optionText={EventTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="first Name" source="firstName" />
        <TextInput label="last Name" source="lastName" />
        <TextInput label="phone Number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
