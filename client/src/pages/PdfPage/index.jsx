import { Container, Typography } from '@mui/material';
import React from 'react';
import ReactToPdf from 'react-to-pdf';

export default function PdfPage(props) {
    const ref = React.createRef();
    return (
        <div>
                <Container maxWidth="sm">
            <div ref={ref} width="100%" style={{margin: "0 auto"}}>
                    <img src={require('../../assets/judiacialPaper.jfif')} width="100%" />
                    <Typography component="h2" variant="h2" align="center" gutterBottom>
                        Contract Name
                    </Typography>
                    <Typography component="div" variant="body1" align="center" gutterBottom>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum officia dolores id,
                        ut quo beatae dicta ducimus necessitatibus. Ex, expedita incidunt in suscipit tempora
                        autem dolor, quis ea recusandae voluptas sed praesentium, earum dicta impedit commodi
                        aspernatur corporis explicabo soluta eius eos. Odit nulla sed corrupti harum, soluta
                        assumenda! Animi deleniti quo dicta dolore, sequi suscipit excepturi delectus ullam?
                        Repudiandae quidem quos repellat sint ducimus aut dicta mollitia accusamus commodi
                        recusandae exercitationem facere, laboriosam molestias. Doloribus dolorem recusandae
                        tenetur aliquam a eligendi explicabo perferendis nobis iste, repellendus repudiandae
                        reprehenderit magnam eaque architecto, dolores, exercitationem molestias aliquid?
                        Perferendis distinctio nobis ducimus.
                    </Typography>
                    <Typography component="h6" variant="h6" align="center" gutterBottom>
                        Contract Will effect from : Jan 12, 2022 12:00 AM
                    </Typography>
                    <Typography component="h6" variant="h6" align="center" gutterBottom>
                        Contract Will effect Till : Jan 12, 2023 12:00 AM
                    </Typography>
                    <Typography component="body2" variant="h6" align="center" color="red" gutterBottom>
                        *Note: THE PDF DOWNLOADED WILL BE A GENERATED VERSION OF THIS CONTRACT WHILE THE ORIGINAL FILE IS SOMEWHERE IN THE LARGE WORLD
                    </Typography>

            </div>
                </Container>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
        </div>
    );
}