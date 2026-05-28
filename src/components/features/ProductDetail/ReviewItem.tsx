import Rating from '@mui/material/Rating';
import { useState } from 'react';
import ReviewForm from './ReviewForm';
import "./ReviewItem.css";

interface Review {
    name: string;
    rating: number;
    comment: string;
    date: string;
}

function randomRating(min: number, max: number) {
    return Math.round((Math.random() * (max - min) + min) * 2) / 2;
}

const initialReviews: Review[] = [
    {
        name: "Anna",
        rating: randomRating(3, 5),
        comment: "Sturdy and looks great with anything. Carries my laptop without complaint.",
        date: "2026-03-14",
    },
    {
        name: "Tom",
        rating: randomRating(3, 5),
        comment: "Bigger than I expected, otherwise perfect.",
        date: "2026-04-02",
    },
];

export default function ReviewItem() {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [showForm, setShowForm] = useState(false);
    const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    const handleAddReview = (name: string, rating: number, comment: string) => {
        const today = new Date().toISOString().split("T")[0];
        setReviews([{ name, rating, comment, date: today }, ...reviews]);
        setShowForm(false);
    };

    return (
        <div className="reviews-wrapper">
            <div className="reviews-header">
                <div className="reviews-header-left">
                    <span className="reviews-tag">REVIEWS</span>
                    <h2 className="reviews-title">{reviews.length} customer reviews.</h2>
                    <div className="reviews-average">
                        <Rating value={average} precision={0.5} readOnly />
                        <span className="reviews-average-label">{average.toFixed(1)} average</span>
                    </div>
                </div>
                {!showForm && (
                    <button className="reviews-write-btn" onClick={() => setShowForm(true)}>
                        Write a review
                    </button>
                )}
            </div>

            {showForm && (
                <ReviewForm
                    onSubmit={handleAddReview}
                    onCancel={() => setShowForm(false)}
                />
            )}

            <div className="reviews-list">
                {reviews.map((review, i) => (
                    <div key={i} className="review-item">
                        <div className="review-item-top">
                            <div className="review-item-left">
                                <span className="review-item-name">{review.name}</span>
                                <Rating value={review.rating} precision={0.5} readOnly size="small" />
                            </div>
                            <span className="review-item-date">{review.date}</span>
                        </div>
                        <p className="review-item-comment">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}