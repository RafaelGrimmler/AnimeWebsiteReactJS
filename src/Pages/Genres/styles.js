import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Body = styled.div`
    width: 100%;
    background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
`;

export const GenresContainer = styled.div`
    width: 80%;
    margin-top: 50px;
    margin-bottom: 50px;

    & ul {
        width: 100%;
        height: 100%;
        display: grid;grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-column-gap: 40px;
        justify-items: center;

        & li {
            height: 40%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 35px;
            background-color: var(--color-universal-header-text-animation);
            cursor: pointer;

            @media only screen and (max-width: 1250px){
                & {
                    height: 60%;
                }
            }

            @media only screen and (max-width: 950px){
                & {
                    height: 80%;
                }
            }

            @media only screen and (max-width: 768px){
                & {
                    height: 100%;
                    grid-row-gap: 10px;
                }
            }

            & span {
                color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
                transition: .5s;
                filter: drop-shadow(0 0 1px black);
            }

            &:hover {
                background-color: #941f3f;
            }

            &:hover span{
                color: ${props => props.lightmode ? '#f0f0f0' : 'black'};
            }
        }
    }
`;
