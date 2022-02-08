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
    transition: .5s;
`;

export const GenresContainer = styled.div`
    width: 80%;
    margin-top: 50px;
    margin-bottom: 50px;

    & ul {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
        grid-column-gap: 40px;
        grid-row-gap: 10px;
        justify-items: center; 
        
        @media only screen and (max-width: 375px){
            & {
                grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
            }
        }

        & li {
            height: 100%;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 35px;
            background-color: var(--color-universal-header-text-animation);
            cursor: pointer;
            transition: .5s;
            
            @media only screen and (max-width: 600px){
                & {
                    width: 100%;
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
