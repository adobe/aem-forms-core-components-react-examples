import Form from '../components/Form';
import Panel from '../components/Panel';
import TextField from '../components/TextField';
import Date from '../components/Date';
import PlainText from '../components/PlainText';
import Title from '../components/Title';
import Image from '../components/Image';
import Rating from '../components/Rating';
import Slider from '../components/Slider';
import TabsVerticalComp from '../components/TabsVerticalComp';
import TabsHorizontalComp from '../components/TabsHorizontalComp';
import Wizard from '../components/Wizard';
import Button from '../components/Button';
import Number from '../components/Number';
import DropDown from '../components/DropDown';
import AutoComplete from '../components/AutoComplete';
import Radiobutton from '../components/Radiobutton';
import CheckboxGroup from '../components/CheckboxGroup';
import Checkbox from '../components/Checkbox';
import Switch from '../components/Switch';
import Accordion from '../components/Accordion';

export default {
  form: Form,
  panel: Panel,
  'text-input': TextField,
  'date-input': Date,
  'plain-text': PlainText,
  'custom:title': Title,
  image: Image,
  'custom:rating':Rating,
  'custom:slider':Slider,
  'custom:vertical-tab': TabsVerticalComp,
  'custom:horizontal-tab': TabsHorizontalComp,
  'custom:wizard': Wizard,
  button: Button,
  'number-input': Number,
  'drop-down': DropDown,
  'custom:autocomplete':AutoComplete,
  'radio-group': Radiobutton,
  'checkbox-group': CheckboxGroup,
  checkbox: Checkbox,
  'custom:switch': Switch
  'password-input': TextField,
  'multiline-input': TextField,
  email:TextField,
  'custom:accordion': Accordion
};