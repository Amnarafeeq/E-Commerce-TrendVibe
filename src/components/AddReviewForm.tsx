"use client"
import React, { useState } from 'react'

interface AddReviewFormProps {
  onAddReview: (review: { user: string; comment: string; rating: number }) => void
}

const AddReviewForm = ({ onAddReview }: AddReviewFormProps) => {
  const [user, setUser] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !comment) {
      alert('Please fill in all fields.')
      return
    }
    onAddReview({ user, comment, rating })
    setUser('')
    setComment('')
    setRating(5)
  }

  return (
    <div className="mt-4 border-t pt-4">
      <h4 className="text-sm font-semibold mb-2">Add a Review</h4>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          placeholder="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border rounded-md"
        >
          <option value={5}>⭐⭐⭐⭐⭐ - Excellent</option>
          <option value={4}>⭐⭐⭐⭐ - Good</option>
          <option value={3}>⭐⭐⭐ - Average</option>
          <option value={2}>⭐⭐ - Poor</option>
          <option value={1}>⭐ - Very Bad</option>
        </select>
        <button type="submit" className="w-full bg-darkBackground text-white p-2 rounded-md hover:bg-opacity-90">
          Submit Review
        </button>
      </form>
    </div>
  )
}

export default AddReviewForm
