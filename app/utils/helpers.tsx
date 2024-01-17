import React from "react";
import reactStringReplace from "react-string-replace";
import PhoneNumber from "../components/PhoneNumber";

export const USDFormat = (num: number) => {
  return new Intl.NumberFormat(`en-US`, {
    currency: `USD`,
    style: "currency"
  }).format(num);
};

export const hidePhoneNumber = (text: string) => {
  const regexp = /\+?\(?\d*\)? ?\(?\d+\)?\d*([\s./-]?\d{2,})+/g;

  const phone_numbers: RegExpMatchArray[] = [];
  for (const match of text.matchAll(regexp)) {
    phone_numbers.push(match);
  }

  const filtered_numbers = phone_numbers
    .filter((item) => item[0].length > 7)
    .map((item) => ({
      real: item[0],
      secured: item[0].replace(/\d{4}$/, 'XXXX'),
      hideReal: true,
    }));

  let newDescription: React.ReactNode[] | string = text;

  filtered_numbers.forEach((phoneNumber) => {
    newDescription = reactStringReplace(
      newDescription as string,
      phoneNumber.real,
      () => <PhoneNumber {...phoneNumber} />,
    );
  });

  return newDescription;
};

