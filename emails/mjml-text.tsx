import { Mjml, MjmlHead, MjmlBody, MjmlText } from 'mjml-react';
import React from 'react';

const Text = () => (
    <Mjml>
        <MjmlHead />
        <MjmlBody>
            <MjmlText>
                This is a text
            </MjmlText>
        </MjmlBody>
    </Mjml>
);

export default Text;