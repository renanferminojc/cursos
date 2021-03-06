import React from 'react';

function TechItem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button onClick={onDelete} type="button">
                Remover
            </button>
        </li>
    )
}

TechItem.defaultProps = {
    tech: 'oculto',
}

export default TechItem;
