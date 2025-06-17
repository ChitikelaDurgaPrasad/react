  import React, { useEffect, useRef, useState, useCallback } from 'react';
  import { FixedSizeGrid as Grid } from 'react-window';
  import { fetchUserCards } from '../../index';

  const COLUMN_COUNT = 2;
  const ITEM_WIDTH = 200;
  const ITEM_HEIGHT = 250;
  const GRID_WIDTH = ITEM_WIDTH * COLUMN_COUNT;
  const GRID_HEIGHT = 565;

  const VirtualInfiniteGrid = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const observer = useRef(null);
    const isFetching = useRef(false); // Prevent multiple fetches
    const [counter,setCounter]=useState(0);

    // Fetch data when page changes
    useEffect(() => {
      if (!hasMore || isFetching.current) return;

      isFetching.current = true;
      setIsLoading(true);

      fetchUserCards(page).then(({ data, hasMore }) => {
        setItems((prev) => {
          console.log("Fetched items:", [...prev, ...data]);
          return [...prev, ...data];
        });
        setHasMore(hasMore);
        setIsLoading(false);
        isFetching.current = false;
      }).catch(() => {
        setIsLoading(false);
        isFetching.current = false;
      });

      return () => {};
    }, [page]);

    // Observe the last row for infinite scrolling
    const observeLastRow = useCallback(
      (node) => {

        console.log("observeLastRow called for node");
        if (!node || !hasMore || isLoading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !isFetching.current) {
              console.log("Last row visible, incrementing page");
              setPage((prev) => {
                console.log("New page:", prev + 1);
                return prev + 1;
              });
              observer.current.disconnect(); // Disconnect immediately after triggering
            }
          },
          { threshold: 0.1 } // Trigger when 10% of the last row is visible
        );

        observer.current.observe(node);
      },
      [hasMore, isLoading]
    );
    console.log("body");
    const rowCount = Math.ceil(items.length / COLUMN_COUNT);

    const Cell = ({ columnIndex, rowIndex, style }) => {
      const index = rowIndex * COLUMN_COUNT + columnIndex;
      if (index >= items.length) return null;

      const item = items[index];
      const isLastRow = rowIndex === rowCount - 1 && columnIndex === 0;
      return (
        <div
          style={{
            ...style,
            padding: 10,
            border: '1px solid #ccc',
            textAlign: 'center',
          }}
          ref={isLastRow ? observeLastRow : null}
        >
          <img src={item.img} alt={item.name} height={120} style={{ borderRadius: 8 }} />
          <p>{item.name} (ID: {item.id})</p>
        </div>
      );
    };

    if (items.length === 0 && isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          Loading...
        </div>
      );
    }

    return (
      <div>
        <div className="mb-4 mt-3 mx-3">
          <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
            Button
          </button>
        </div>
        <Grid
          columnCount={COLUMN_COUNT}
          columnWidth={ITEM_WIDTH}
          height={GRID_HEIGHT}
          rowCount={rowCount}
          rowHeight={ITEM_HEIGHT}
          width={GRID_WIDTH}
        >
          {Cell}
        </Grid>
        {isLoading && <div>Loading more...</div>}
      </div>
    );
  };

  export default VirtualInfiniteGrid;


const VirtualInfiniteGridTwo = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef(null);
  const isFetching = useRef(false);

  useEffect(() => {
    if (!hasMore || isFetching.current) return;

    let isCancelled = false;
    isFetching.current = true;
    setIsLoading(true);

    fetchUserCards(page).then(({ data, hasMore }) => {
      if (isCancelled) return;
      setItems((prev) => {
        console.log("Fetched items:", [...prev, ...data]);
        return [...prev, ...data];
      });
      setHasMore(hasMore);
      setIsLoading(false);
      isFetching.current = false;
    }).catch((error) => {
      if (isCancelled) return;
      setIsLoading(false);
      isFetching.current = false;
    });

    return () => {
      isCancelled = true;
    };
  }, [page, hasMore]);
  // console.log("inside");
  const observeLastRow = useCallback(
    (node) => {
      if (!node || !hasMore || isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isFetching.current) {
            console.log("Last row visible, incrementing page");
            setPage((prev) => {
              console.log("New page:", prev + 1);
              return prev + 1;
            });
            observer.current.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.current.observe(node);
    },
    [hasMore, isLoading]
  );

  const rowCount = Math.ceil(items.length / COLUMN_COUNT);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * COLUMN_COUNT + columnIndex;
    if (index >= items.length) return null;

    const item = items[index];
    const isLastRow = rowIndex === rowCount - 1 && columnIndex === 0;

    return (
      <div
        style={{
          ...style,
          padding: 10,
          border: '1px solid #ccc',
          textAlign: 'center',
        }}
        ref={isLastRow ? observeLastRow : null}
      >
        <img src={item.img} alt={item.name} height={120} style={{ borderRadius: 8 }} />
        <p>{item.name} (ID: {item.id})</p>
      </div>
    );
  };

  if (items.length === 0 && isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <Grid
        columnCount={COLUMN_COUNT}
        columnWidth={ITEM_WIDTH}
        height={GRID_HEIGHT}
        rowCount={rowCount}
        rowHeight={ITEM_HEIGHT}
        width={GRID_WIDTH}
      >
        {Cell}
      </Grid>
      {isLoading && <div>Loading more...</div>}
    </div>
  );
};