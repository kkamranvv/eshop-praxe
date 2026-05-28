import Rating from '@mui/material/Rating';
import { useState } from 'react';
import "./ReviewForm.css";

interface ReviewFormProps {
    onSubmit: (name: string, rating: number, comment: string) => void;
    onCancel: () => void;
}

const ReviewForm = ({ onSubmit, onCancel }: ReviewFormProps) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState<number>(3.5);
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({ name: false, comment: false });

    const handleSubmit = () => {
        const newErrors = {
            name: name.trim() === "",
            comment: comment.trim() === "",
        };
        setErrors(newErrors);
        if (newErrors.name || newErrors.comment) return;
        onSubmit(name, rating, comment);
    };

    return (
        <div className="review-form">
            <div className="review-form-row">
                <div className="review-form-field">
                    <label className="review-form-label">NAME</label>
                    <input
                        className={`review-form-input ${errors.name ? "review-form-input--error" : ""}`}
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors(prev => ({ ...prev, name: false }));
                        }}
                    />
                    {errors.name && <span className="review-form-error">Please enter your name</span>}
                </div>
                <div className="review-form-field">
                    <label className="review-form-label">RATING</label>
                    <Rating
                        value={rating}
                        precision={0.5}
                        onChange={(_, val) => val && setRating(val)}
                    />
                </div>
            </div>

            <div className="review-form-field">
                <label className="review-form-label">REVIEW</label>
                <textarea
                    className={`review-form-textarea ${errors.comment ? "review-form-textarea--error" : ""}`}
                    placeholder="What did you think?"
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value);
                        if (errors.comment) setErrors(prev => ({ ...prev, comment: false }));
                    }}
                />
                {errors.comment && <span className="review-form-error">Please write a review</span>}
            </div>

            <div className="review-form-actions">
                <button className="review-form-cancel" onClick={onCancel}>Cancel</button>
                <button className="review-form-submit" onClick={handleSubmit}>Post review</button>
            </div>
        </div>
    );
};

export default ReviewForm;