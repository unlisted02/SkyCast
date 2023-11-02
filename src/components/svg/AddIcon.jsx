import "./style.css";

const AddIcon = ({ darkMode }) => {
    return (
        darkMode ?
            (<svg className="add__icon" viewBox="0 0 209.1 209.1" >
                <defs>
                    <filter id="a" width="209.1" height="209.1" x="0" y="0" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" />
                        <feGaussianBlur result="blur" stdDeviation="3" />
                        <feFlood floodColor="#333" floodOpacity=".1" />
                        <feComposite in2="blur" operator="in" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                    <linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#f41878" />
                        <stop offset="1" stop-color="#0e008b" />
                    </linearGradient>
                    <linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#f41878" />
                        <stop offset="1" stop-color="#18058c" />
                    </linearGradient>
                </defs>
                <g data-name="Plus Icon" transform="translate(-1454.4 -326.4)">
                    <circle cx="95.6" cy="95.6" r="95.6" fill="#39518a" data-name="Ellipse 7" filter="url(#a)"
                        transform="translate(1463.4 332.4)" />
                    <rect width="12.8" height="142.9" fill="url(#b)" data-name="Rectangle 3" rx="5"
                        transform="translate(1552.6 358.1)" />
                    <rect width="12.8" height="142.9" fill="url(#c)" data-name="Rectangle 4" rx="5"
                        transform="rotate(90 603.6 1026.8)" />
                </g>
            </svg >)
            :
            (<svg className="add__icon" id="Plus_Icon" data-name="Plus Icon" viewBox="1454.4 326.4 209.1 209.1">
                <defs>
                    <filter id="Ellipse_7" width="209.1" height="209.1" x="1454.4" y="326.4" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"></feOffset>
                        <feGaussianBlur result="blur" stdDeviation="3" />
                        <feFlood floodColor="#333" floodOpacity=".1"></feFlood>
                        <feComposite in2="blur" operator="in"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                    </filter>
                </defs>
                <g filter="url(#Ellipse_7)">
                    <circle id="Ellipse_7-2" cx="95.6" cy="95.6" r="95.6" fill="#f5f8ff" data-name="Ellipse 7"
                        transform="translate(1463.4 332.4)"></circle>
                </g>
                <rect id="Rectangle_3" width="12.8" height="142.9" className="cls-299" data-name="Rectangle 3" rx="5"
                    transform="translate(1552.6 358.1)"></rect>
                <rect id="Rectangle_4" width="12.8" height="142.9" className="cls-299" data-name="Rectangle 4" rx="5"
                    transform="rotate(90 603.6 1026.8)" />
            </svg>)
    )
}

export default AddIcon