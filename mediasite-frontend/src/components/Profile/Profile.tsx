interface profileProps {
    username: string;
}

export default function profile({username}: profileProps) {
    return (
        <div className="dashboard">Profile</div>
    )
}