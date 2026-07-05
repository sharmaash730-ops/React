function User({ channelName ,name}) {
    return (
        <div>
            <button onClick={() => channelName(name)}>subscribe</button>
        </div>
    );
}
export default User;