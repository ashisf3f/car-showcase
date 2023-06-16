import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} >
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto modal__scrollbar ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-200 ease-in scale-100"
                leaveFrom="opacity-100 scale-95"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full relative max-w-lg max-h-[90vh] overflow-y-auto  modal__scrollbar rounded-2xl p-6 bg-white shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="fixed top-0 m-5 right-0 bg-primary-blue-100 rounded-full z-10 p-1"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      height={20}
                      width={20}
                      className="opacity-60"
                      alt="close"
                      priority
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div
                      className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg
                    "
                    >
                      <Image
                        src={generateCarImageUrl(car)}
                        className="object-contain"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                        priority
                        alt="car model"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className=" flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car , '29')}
                          className="object-contain"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                          alt="car model"
                        />
                      </div>
                      <div className=" flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car , '33')}
                          className="object-contain"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                          alt="car model"
                        />
                      </div>
                      <div className=" flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car , '14')}
                          className="object-contain"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                          alt="car model"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 ">
                    <h2 className="font-semibold text-xl capitalize text-left">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between px-3 gap-5 w-full "
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
