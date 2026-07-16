const tick = (pos: React.CSSProperties): React.CSSProperties => ({
  position: 'absolute',
  width: 12,
  height: 12,
  ...pos,
})

export function Corners() {
  return (
    <>
      <div style={tick({ top: -5, left: -5, borderTop: '1px solid #7ea6dd', borderLeft: '1px solid #7ea6dd' })} />
      <div style={tick({ top: -5, right: -5, borderTop: '1px solid #7ea6dd', borderRight: '1px solid #7ea6dd' })} />
      <div style={tick({ bottom: -5, left: -5, borderBottom: '1px solid #7ea6dd', borderLeft: '1px solid #7ea6dd' })} />
      <div style={tick({ bottom: -5, right: -5, borderBottom: '1px solid #7ea6dd', borderRight: '1px solid #7ea6dd' })} />
    </>
  )
}
