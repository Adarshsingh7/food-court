import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendReservationEmail } from "../utils/sendEmail";
import toast from "react-hot-toast";

type FormValues = {
  eventDate: string;
  guests: number;
  time: string;
  eventDetails: string;
  name: string;
  email: string;
  contactNumber: string;
};

const Event: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsSubmitting(true);
    sendReservationEmail(data).then((data) => {
      if (data.status === "success") {
        toast.success(
          "Your reservation request sent successfully, we will contact you soon!",
        );
        reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
      setIsSubmitting(false);
    });
  };

  return (
    <div id="webcrumbs" className="flex justify-center p-4">
      <div className="w-full max-w-4xl bg-zinc-100 rounded-lg shadow-lg p-6 min-h-[600px]">
        <header className="mb-6">
          <h1 className="text-3xl font-title text-neutral-950">
            Food Booking Event
          </h1>
          <p className="text-neutral-700">
            Plan your reservation with us for exclusive food events!
          </p>
        </header>
        <section className="mb-6">
          <img
            className="w-full h-[300px] object-cover rounded-md"
            src="https://tools-api.webcrumbs.org/image-placeholder/800/300/food/1"
            alt="Food event"
          />
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-md p-4">
              <h2 className="font-bold text-lg text-neutral-950">Event Date</h2>
              <p className="text-neutral-700">Pick your preferred date</p>
              <input
                type="date"
                className="mt-2 w-full p-2 rounded-md border text-neutral-950"
                autoComplete="new-password"
                {...register("eventDate", {
                  required: "Event date is required",
                })}
              />
              {errors.eventDate && (
                <p className="text-purple-600 text-xs">
                  {errors.eventDate.message}
                </p>
              )}
            </div>

            <div className="bg-white rounded-md p-4">
              <h2 className="font-bold text-lg text-neutral-950">Guests</h2>
              <p className="text-neutral-700">Select number of guests</p>
              <input
                type="number"
                min="1"
                className="mt-2 w-full p-2 rounded-md border text-neutral-950"
                autoComplete="new-password"
                {...register("guests", {
                  required: "Number of guests is required",
                })}
              />
              {errors.guests && (
                <p className="text-purple-600 text-xs">
                  {errors.guests.message}
                </p>
              )}
            </div>

            <div className="bg-white rounded-md p-4">
              <h2 className="font-bold text-lg text-neutral-950">Time</h2>
              <p className="text-neutral-700">Choose time slot</p>
              <select
                className="mt-2 w-full p-2 rounded-md border text-neutral-950"
                autoComplete="new-password"
                {...register("time", { required: "Time is required" })}
              >
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
              </select>
              {errors.time && (
                <p className="text-purple-600 text-xs">{errors.time.message}</p>
              )}
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-md p-4">
              <h2 className="font-bold text-lg text-neutral-950">Name</h2>
              <p className="text-neutral-700">Enter your full name</p>
              <input
                type="text"
                className="mt-2 w-full p-2 rounded-md border text-neutral-950"
                autoComplete="new-password"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                })}
              />
              {errors.name && (
                <p className="text-purple-600 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="bg-white rounded-md p-4">
              <h2 className="font-bold text-lg text-neutral-950">Email</h2>
              <p className="text-neutral-700">Enter your email address</p>
              <input
                type="email"
                className="mt-2 w-full p-2 rounded-md border text-neutral-950"
                autoComplete="new-password"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-purple-600 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="bg-white rounded-md p-4">
              <h2 className="font-bold text-lg text-neutral-950">
                Contact Number
              </h2>
              <p className="text-neutral-700">Enter your contact number</p>
              <input
                type="tel"
                className="mt-2 w-full p-2 rounded-md border text-neutral-950"
                autoComplete="new-password"
                {...register("contactNumber", {
                  required: "Contact number is required",
                  minLength: {
                    value: 10,
                    message:
                      "Contact number must be at least 10 characters long",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "Contact number must be no more than 15 characters long",
                  },
                })}
              />
              {errors.contactNumber && (
                <p className="text-purple-600 text-xs">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>
          </section>
          <section className="mt-6">
            <h2 className="font-bold text-lg text-neutral-950">
              Reservation Summary
            </h2>
            <p className="text-neutral-700 mb-4">
              Please review your reservation details before confirming.
            </p>

            <details className="cursor-pointer bg-white p-4 rounded-md">
              <summary className="font-semibold text-neutral-950">
                Event Details
              </summary>
              <textarea
                className="mt-2 w-full p-2 rounded-md text-neutral-950"
                placeholder="A detailed description of the event, menu, and more information for your guests to enjoy the exclusive experience."
                autoComplete="new-password"
                {...register("eventDetails", {
                  required: "Event details are required",
                  minLength: {
                    value: 20,
                    message:
                      "Event details must be at least 20 characters long",
                  },
                })}
              />
              {errors.eventDetails && (
                <p className="text-purple-600 text-xs">
                  {errors.eventDetails.message}
                </p>
              )}
            </details>

            <button
              type="submit"
              className={`px-6 py-2 mt-4 rounded-md ${isSubmitting ? "bg-zinc-700 text-white" : "bg-primary-500 text-primary-50"}`}
              disabled={isSubmitting}
            >
              Confirm Reservation
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Event;
