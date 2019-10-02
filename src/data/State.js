var State = {};

State.isEngEnabled = true;
State.flipState = () => {
    console.log("State before : " + State.isEngEnabled)
    State.isEngEnabled = !State.isEngEnabled;
    console.log("State after : " + State.isEngEnabled)
};


export default State;
