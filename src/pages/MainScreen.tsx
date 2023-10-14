import React, { useEffect } from 'react';
import styled from 'styled-components';

// import { useStore } from '@components/zustand/jsonStore';
// import { FilteredItems } from '@type/types';

const StyledH1 = styled.h1`
    color: White;
`;

function MainScreen(): React.JSX.Element {
    // Zustand 'useStore' hook to set data
    //  const setData = useStore((state) => state.setData);
    //  const [filtered, setFiltered] = useState<FilteredItems[]>([]);

    // get API data

    // Fetch data when the component mounts
    useEffect(() => {}, []);

    // renders received data with table component
    return <StyledH1>[Jin-dev] vite+react template</StyledH1>;
}

export default MainScreen;
