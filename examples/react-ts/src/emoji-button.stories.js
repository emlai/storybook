import React from 'react';
import { EmojiButton } from './emoji-button';
import {Paper} from "@material-ui/core";

export default { component: EmojiButton, title: 'Examples / Emoji Button' };

export const WithArgs = (args) => <EmojiButton {...args} component={Paper} />;
WithArgs.args = { label: 'With args' };
export const Basic = () => <EmojiButton label="Click me" />;
