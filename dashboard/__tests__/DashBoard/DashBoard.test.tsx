// Utils
import { render } from '@utils/testUtils'

// App
import Dashboard from 'app/(dashboard)/page'

describe('Dashboard Page', () => {
  it('should render Dashboard Page', () => {
    const { container } = render(<Dashboard />)

    expect(container).toMatchSnapshot()
  })
})
