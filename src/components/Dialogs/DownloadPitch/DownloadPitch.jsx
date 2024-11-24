import { ReactComponent as PitchAppQR } from './assets/PitchAppQR.svg'
import { ReactComponent as PitchAppIcon } from './assets/Pitch.svg'
import { ReactComponent as DownloadPitchApp } from './assets/DownloadPitchApp.svg'


import './DownloadPitch.style.scss'

/**
 * Download Pitch modal component
 * @param {Object} props
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 * @constructor
 */
export const DownloadPitch = (props) => {
    const { open, onClose } = props
    return <dialog className="download-pitch-dialog" open={open} onClick={onClose}>
        <div className="download-pitch-dialog__content">
            <div className="download-pitch-dialog__title">
                <DownloadPitchApp />
                <div className="download-pitch-dialog__caption">
                    <span>to see more places and<br/>make real plans!</span>
                </div>
            </div>
            <div className="download-pitch-dialog__qr">
                <PitchAppQR/>
            </div>
        </div>
    </dialog>

}