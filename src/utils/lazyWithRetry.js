import React from "react";

export default function lazyWithRetry(factory, retries = 3, interval = 1000) {
    return React.lazy(() => {
        let attemptsLeft = retries;

        const attempt = () =>
            factory().catch((error) => {
                if (attemptsLeft <= 0) {
                    return Promise.reject(error);
                }
                attemptsLeft -= 1;
                return new Promise((resolve) => setTimeout(resolve, interval)).then(attempt);
            });

        return attempt();
    });
}
