import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [selectedRequirement, setSelectedRequirement] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(4);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [selectedRequirements, setSelectedRequirements] = useState(null);

  const navigate = useNavigate();

  const handleRequirementChange = (event) => {
    setSelectedRequirement(event.target.value);
  };

  const handleMealChange = (event) => {
    setSelectedMeal(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleRequirementChanges = (event) => {
    setSelectedRequirements(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      selectedRequirement,
      selectedMeal,
      numberOfPeople,
      startDate,
      startTime,
      endDate,
      endTime,
      selectedRequirements,
    };

    console.log(formData);

    axios
      .post('http://localhost:3000/booking', formData)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    navigate('/next-page', { state: formData });
  };

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex  items-center mb-4">
        <h1 className="text-2xl text-red-500 text-center items-center">
          Book Your CHEF
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="requirement">
            Select Requirement
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedRequirement === 'Birthday' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedRequirement('Birthday')}
            >
              Birthday
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedRequirement === 'Kitty' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedRequirement('Kitty')}
            >
              Kitty
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedRequirement === 'Occasion' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedRequirement('Occasion')}
            >
              Occasion
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedRequirement === 'Gathering' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedRequirement('Gathering')}
            >
              Gathering
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedRequirement === 'Other' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedRequirement('Other')}
            >
              Other
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="meal">
            Select Meal
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedMeal === 'Breakfast' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedMeal('Breakfast')}
            >
              Breakfast
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedMeal === 'Lunch' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedMeal('Lunch')}
            >
              Lunch
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedMeal === 'Snacks' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedMeal('Snacks')}
            >
              Snacks
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedMeal === 'Dinner' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedMeal('Dinner')}
            >
              Dinner
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="people">
            No of people
          </label>
          <p className="text-gray-500 text-sm">
            Contact to select more than 20
          </p>
          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="px-2 py-1 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900"
              onClick={() => setNumberOfPeople(numberOfPeople - 1)}
              disabled={numberOfPeople === 1}
            >
              -
            </button>
            <input
              type="number"
              id="people"
              name="people"
              className="w-16 text-center border border-gray-300 rounded-md px-2 py-1"
              value={numberOfPeople}
              onChange={handleNumberOfPeopleChange}
            />
            <button
              type="button"
              className="px-2 py-1 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900"
              onClick={() => setNumberOfPeople(numberOfPeople + 1)}
              disabled={numberOfPeople === 20}
            >
              +
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="start-date">
            Start Date
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              id="start-date"
              name="start-date"
              className="border border-gray-300 rounded-md px-2 py-1"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <select
              id="start-time"
              name="start-time"
              className="border border-gray-300 rounded-md px-2 py-1"
              value={startTime}
              onChange={handleStartTimeChange}
            >
              <option value="">Select Start Time</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              {/* Add more time options here */}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="end-date">
            End Date
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              id="end-date"
              name="end-date"
              className="border border-gray-300 rounded-md px-2 py-1"
              value={endDate}
              onChange={handleEndDateChange}
            />
            <select
              id="end-time"
              name="end-time"
              className="border border-gray-300 rounded-md px-2 py-1"
              value={endTime}
              onChange={handleEndTimeChange}
            >
              <option value="">Select End Time</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              {/* Add more time options here */}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="requirement">
            Additional Requirements
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedRequirements === 'Cleaner' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedRequirements('Cleaner')}
            >
              Cleaner
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedRequirements === 'Utensils' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedRequirements('Utensils')}
            >
              Utensils
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 ${
                selectedRequirements === 'Cutlery' ? 'bg-red-500 text-white' : ''
              }`}
              onClick={() => setSelectedRequirements('Cutlery')}
            >
              Cutlery
            </button>
          </div>
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
