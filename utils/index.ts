import { CarProps, FilterProps } from "@/types";

export default async function fetchCars(filters: FilterProps) {
  const { manufacturer, limit, fuel, model, year } = filters;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d00b864baamsh0e8e33d0c35d319p15b527jsnbf764238e98a",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const respose = await fetch(url, options);
    const result = await respose.json();
    // console.log(result);
    return result;
  } catch (error) {}
}
export const calculateRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 500; // Base price per day in Nepali Rupees
  const mileagePerDay = 10; // Mileage per day in kilometers
  const ageFactor = 69; // Age factor in Nepali Rupees per year

  // Calculate the rental cost based on city mileage and year
  const currentYear = new Date().getFullYear();
  const rentalCost =
    basePricePerDay * (currentYear - year) +
    (mileagePerDay + city_mpg) * ageFactor;

  return rentalCost;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", `${process.env.NEXT_PUBLIC_CUSOMTER_IMAGE}`);
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};
