import './styles.css';

interface Props {
  bgColor?: string;
  percentage?: number;
  mode?: string;
  width?: string;
  height?: string;
  progressText?: boolean;
  progressTextColor?: string;
}

const ProgressBar = ({bgColor, percentage, mode="vertical", width, height, progressText, progressTextColor}: Props) => {
  return (
    <div style={{width, height}} className={`${mode === "vertical" ? "vertical-wrapper" : "horizontal-wrapper"}`}>
        <div className="population__progress__bar_percentage">
            {mode === 'vertical' ? (
              <div style={{height: `${percentage}%`, backgroundColor: `${bgColor}`}} className="population__progress"></div>
            ) : (
              <div style={{height: '100%', width: `${percentage}%`, backgroundColor: `${bgColor}`}} className="population__progress"></div>
            )}
        </div>
        <div style={{color: `${progressTextColor}`}} className={mode === 'vertical' ? `progress_text_center_vertical` : `progress_text_center_horizontal`}>{progressText && `${percentage}%`}</div>
    </div>
  )
}

export default ProgressBar