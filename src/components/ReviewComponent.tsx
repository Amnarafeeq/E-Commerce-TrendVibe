"use client"
import React, { useState } from 'react'
import Reviews from './Reviews';
import AddReviewForm from './AddReviewForm';

const ReviewComponent = () => {
     // State to manage user-submitted reviews
   const [reviews, setReviews] = useState<{ user: string; comment: string; rating: number }[]>([])

   // Function to handle adding new review
   const handleAddReview = (newReview: { user: string; comment: string; rating: number }) => {
     setReviews([...reviews, newReview])
   }
  return (
    <div>
            {/* Dynamic Reviews Section */}
      <Reviews reviews={reviews} />

{/* Add Review Form */}
<AddReviewForm onAddReview={handleAddReview} />
    </div>
  )
}

export default ReviewComponent