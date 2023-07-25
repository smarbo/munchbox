import React, { useState, useEffect } from "react";

const ErrorNotification = ({ duration, message }) => {
    const [progress, setProgress] = useState(500);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isVisible) return; // If already hidden, no need to set up intervals

        const interval = setInterval(() => {
            setProgress((prevProgress) => prevProgress - 500 / (duration * 10));
        }, 5);

        // Clear the interval after the duration has passed
        setTimeout(() => {
            clearInterval(interval);
            setIsVisible(false); // Hide the notification after the timer is up
        }, duration * 1000);

        // Clean up the interval on component unmount or when hidden
        return () => {
            clearInterval(interval);
        };
    }, [duration, isVisible]);

    // If isVisible is false, return null to remove the notification from the DOM
    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 p-4 z-10 w-[400px] bg-red-900 text-white rounded-lg shadow-lg">
            <div className="text-lg font-bold">Error</div>
            <div className="text-sm">{message}</div>
            <div className="relative mt-2 h-3 w-full bg-gray-300 rounded">
                <div
                    className="absolute h-3 bg-red-500 rounded"
                    style={{ width: `${progress / 20}%` }}
                ></div>
            </div>
        </div>
    );
};

const SuccessNotification = ({ duration, message }) => {
    const [progress, setProgress] = useState(500);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isVisible) return; // If already hidden, no need to set up intervals

        const interval = setInterval(() => {
            setProgress((prevProgress) => prevProgress - 500 / (duration * 10));
        }, 5);

        // Clear the interval after the duration has passed
        setTimeout(() => {
            clearInterval(interval);
            setIsVisible(false); // Hide the notification after the timer is up
        }, duration * 1000);

        // Clean up the interval on component unmount or when hidden
        return () => {
            clearInterval(interval);
        };
    }, [duration, isVisible]);

    // If isVisible is false, return null to remove the notification from the DOM
    if (!isVisible) return null;

    return (
        <div
            className={`fixed bottom-4 right-4 p-4 z-10 w-[400px] ${raleway.className} bg-green-900 text-white rounded-lg shadow-lg`}
        >
            <div className="text-lg font-bold">Success</div>
            <div className="text-sm">{message}</div>
            <div className="relative mt-2 h-3 w-full bg-gray-300 rounded">
                <div
                    className="absolute h-3 bg-green-500 rounded"
                    style={{ width: `${progress / 5}%` }}
                ></div>
            </div>
        </div>
    );
};

export { ErrorNotification, SuccessNotification };
