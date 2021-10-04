import styled from "styled-components";

 export const StatusStyle = styled.span`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${(props) => props.theme === true ? 'green' : 'red'};
    `;

export default StatusStyle;