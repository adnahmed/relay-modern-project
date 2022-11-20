import CommonCostTableHeader from './CommonCostTableHeader/CommonCostTableHeader'
import GlowyButton from './GlowyButton/GlowyButton'
export default function TableHead(props) {
  const pagePreview = () => {
    window.print()
  }
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <GlowyButton style={{ padding: '3px', width: 'max-content' }}>
          <button onClick={pagePreview} style={{ color: 'blue' }}>
            Page Preview
          </button>
        </GlowyButton>
        <CommonCostTableHeader />
      </div>
      {props.children}
    </div>
  )
}
