import styled from 'style-components'

const UlMensajes = styled.ul`
    max-width: 800px;
    margin: 10px auto;
    list-style: none;
    dispay: flex;
    flex-direction: colmn;
    gap: 5px;
`;

const LiMensaje = stiled.li`
    background-color: lightblue;
    border: 2px solid dodgerblue;
    padding: 10px 20px;
`;

export {
    UlMensajes,LiMensaje
}