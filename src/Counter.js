const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (count < target) {
          setCount(count + 1);
        }
      }, 20);
  
      return () => clearInterval(intervalId);
    }, [count, target]);
  
    return (
      <h3 className="countingSizeNum counter">
        {count}
      </h3>
    );
  };