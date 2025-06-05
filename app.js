const { useState } = React;

const sections = [
    { title: "Alert System", subtitle: "Real-time disaster alerts", icon: "⚠️" },
    { title: "Facts & Info", subtitle: "Essential safety knowledge", icon: "ℹ️" },
    { title: "SOS Helplines", subtitle: "Emergency contacts & support", icon: "📞" },
    { title: "Social Sync", subtitle: "Stay connected & informed", icon: "🌐" },
    { title: "Rescue Play", subtitle: "Interactive disaster preparedness", icon: "🎮" }
];

function App() {
    const [currentSection, setCurrentSection] = useState(0);

    const handleNext = () => {
        if (currentSection < sections.length - 1) {
            setCurrentSection(currentSection + 1);
        }
    };

    const handleSkip = () => {
        setCurrentSection(sections.length - 1);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="icon">{sections[currentSection].icon}</div>
                <h2 className="title">{sections[currentSection].title}</h2>
                <p className="subtitle">{sections[currentSection].subtitle}</p>
                <div className="buttons">
                    <button className="btn" onClick={handleSkip}>
                        SKIP
                    </button>
                    <button
                        className="btn"
                        onClick={handleNext}
                        disabled={currentSection === sections.length - 1}
                    >
                        NEXT
                    </button>
                </div>
            </div>
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
