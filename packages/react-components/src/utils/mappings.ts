// *******************************************************************************
//  * Copyright 2022 Adobe
//  *
//  * Licensed under the Apache License, Version 2.0 (the “License”);
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *     http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an “AS IS” BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  ******************************************************************************

import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import CheckBoxGroup from '../components/CheckBoxGroup';
import DateInput from '../components/DateInput';
import DropDown from '../components/DropDown';
import NumberField from '../components/NumberField';
import RadioGroup from '../components/RadioButtonGroup';
import TextField from '../components/TextField';
import TextFieldArea from '../components/TextFieldArea';
import FileUpload from '../components/FileUpload';
import Panel from '../components/Panel';
import Wizard from '../components/Wizard';
import Accordion from '../components/Accordion';
import HorizontalTab from '../components/tabs/HorizontalTab';
import Email from '../components/Email';
import VerticalTab from '../components/tabs/VerticalTab';
import Form from '../components/Form';
import PlainText from '../components/PlainText';

const mappings = {
  'text-input': TextField,
  'checkbox-group': CheckBoxGroup,
  'radio-group': RadioGroup,
  'drop-down': DropDown,
  'number-input': NumberField,
  'date-input': DateInput,
  button: Button,
  checkbox: CheckBox,
  'file-input': FileUpload,
  email: Email,
  'multiline-input': TextFieldArea,
  wizard: Wizard,
  accordion: Accordion,
  'custom:horizontal-tab': HorizontalTab,
  'custom:vertical-tab': VerticalTab,
  'plain-text': PlainText,
  panel: Panel,
  form: Form
};

export default mappings;