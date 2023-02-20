// Utils
import { render } from '@utils/testUtils'

// App
import HomePage from 'app/(dashboard)/HomePage'

describe('Home Page Page', () => {
  it('should render Home Page Page', () => {
    const { container } = render(<HomePage />)

    expect(container).toMatchSnapshot()
  })
})
