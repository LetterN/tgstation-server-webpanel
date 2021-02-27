import { library } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faCogs } from "@fortawesome/free-solid-svg-icons/faCogs";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons/faGripLinesVertical";
import { faHdd } from "@fortawesome/free-solid-svg-icons/faHdd";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { faSync } from "@fortawesome/free-solid-svg-icons/faSync";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faUndo } from "@fortawesome/free-solid-svg-icons/faUndo";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons/faUserSlash";

export default function (): void {
    library.add(
        faCheck,
        faTimes,
        faExclamationCircle,
        faUser,
        faUserSlash,
        faHdd,
        faSync,
        faPlus,
        faQuestion,
        faHome,
        faTools,
        faCogs,
        faUndo,
        faInfo,
        faGripLinesVertical,
        faAngleRight,
        faKey,
        faPen,
        faGithub,
        faDiscord,
        faTrash,
        faInfoCircle,
        faDownload,
        faCodeBranch,
        faUpload
    );
}
