import Form from '../forms/DefaultForm'
import Advandages from './Advantages'
import D3View from '../3dView'

export default function Header() {
  return (
    <div className="pos-relative">
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <h1>The side table every modern home should have</h1>
            <p>
              Built with quality in mind and with features you actually need
            </p>

            <Form />
          </div>
          <D3View type="header" />
        </div>
      </header>
      <Advandages />
    </div>
  )
}
