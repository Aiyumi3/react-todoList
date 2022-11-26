import React from "react";

export default function AvaList({ all }) {
    return (
        <ul>
            {all.map(({ title, id }) => (
                <li key={id}>
                    <div>
                        <h2>{title}</h2>
                    </div>

                </li>
            ))}
        </ul>
    );
}
