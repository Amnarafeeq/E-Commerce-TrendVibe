import React from 'react'

interface Review {
  user: string
  comment: string
  rating: number
}

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold">User Reviews</h4>
      {reviews.length ? (
        <ul className="mt-2 space-y-2">
          {reviews.map((review, index) => (
            <li key={index} className="p-2 border rounded-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">{review.user}</span>
                <span className="text-xs text-yellow-500">
                  {'⭐'.repeat(review.rating)}
                </span>
              </div>
              <p className="mt-1 text-xs">{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-xs text-muted-foreground">No reviews yet. Be the first to review!</p>
      )}
    </div>
  )
}

export default Reviews
