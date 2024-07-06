import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          'https://maps.googleapis.com/maps/api/place/details/json',
          {
            params: {
              place_id: 'YOUR_PLACE_ID',
              fields: 'name,rating,reviews',
              key: 'YOUR_API_KEY',
            },
          }
        );
        if (response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="border p-4 mb-4">
            <p className="text-gray-800">{review.text}</p>
            <p className="text-gray-600 mt-2">Rating: {review.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
