import r2wc from '@r2wc/react-to-web-component';

import PitchTemplateGenerator from "./components/PitchTemplateGenerator/PitchTemplateGenerator";
import PitchRandomProfile from "./components/PitchRandomProfile/PitchRandomProfile";


const pitchTemplateGeneratorWebComponent = r2wc(PitchTemplateGenerator);
const pitchRandomProfileWebComponent = r2wc(PitchRandomProfile);

customElements.define("pitch-template-generator", pitchTemplateGeneratorWebComponent);
customElements.define("pitch-random-profile", pitchRandomProfileWebComponent);

