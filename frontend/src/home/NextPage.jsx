import React from 'react';
import { useLocation } from 'react-router-dom';

function NextPage() {
  const location = useLocation();
  const formData = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-red-500 text-center mb-4">Booking Details</h1>
      <div className="mb-4">
        <strong>Selected Requirement:</strong> {formData.selectedRequirement}
      </div>
      <div className="mb-4">
        <strong>Selected Meal:</strong> {formData.selectedMeal}
      </div>
      <div className="mb-4">
        <strong>Number of People:</strong> {formData.numberOfPeople}
      </div>
      <div className="mb-4">
        <strong>Start Date:</strong> {formData.startDate}
      </div>
      <div className="mb-4">
        <strong>Start Time:</strong> {formData.startTime}
      </div>
      <div className="mb-4">
        <strong>End Date:</strong> {formData.endDate}
      </div>
      <div className="mb-4">
        <strong>End Time:</strong> {formData.endTime}
      </div>
      <div className="mb-4">
        <strong>Additional Requirements:</strong> {formData.selectedRequirements}
      </div>
    </div>
  );
}

export default NextPage;
