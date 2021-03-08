const Route = (({path, children, currentUrl}) => {
    return currentUrl === path ? children : null;
});

export default Route;