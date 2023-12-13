import { FC, useState } from 'react';

interface Question {
    id: number;
    text: string;
    variants: string[];
}

const questions: Question[] = [
    {
        id: 1,
        text: 'Какой ваш любимый цвет?',
        variants: ['Красный', 'Синий', 'Зеленый', 'Желтый'],
    },
    {
        id: 2,
        text: 'Какое ваше любимое животное?',
        variants: ['Кошка', 'Собака', 'Попугай', 'Рыбка'],
    },
];

const Test: FC = () => {
    const [answers, setAnswers] = useState<string[]>([]);

    const handleChangeVariant = (questionId: number, optionIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[questionId - 1] = questions[questionId - 1].variants[optionIndex];
        setAnswers(newAnswers);
    };

    return (
        <div>
            <h1>Тестик</h1>
            {questions.map((question) => (
                <div key={question.id}>
                    <p>{question.text}</p>
                    {question.variants.map((variant, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                id={`${question.id}-${index}`}
                                name={`question-${question.id}`}
                                onChange={() => handleChangeVariant(question.id, index)}
                            />
                            <label htmlFor={`${question.id}-${index}`}>{variant}</label>
                        </div>
                    ))}
                </div>
            ))}
            <h1>Ответы:</h1>
            <ol>
                {answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
            </ol>
        </div>
    );
};

export default Test;
