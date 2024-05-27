
import Inform from './Inform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuExample } from './TestReact';
import { Breadcrumbs, Card, Grid } from '@aws-amplify/ui-react';

const NavBar = () => {
  return (
    
    <Grid
      columnGap="0.5rem"
      rowGap="0.5rem"
      templateColumns="1fr 1fr 1fr"
      templateRows="1fr 3fr 1fr"

      style={{
        width: '100vw', 
        height: '900px',
        overflow: 'hidden' 
        
      }}
    >
      <Card
        columnStart="1"
        columnEnd="-1"
      >
        <Breadcrumbs.Container>
          <Breadcrumbs.Item>
            <Breadcrumbs.Separator />
            <Breadcrumbs.Link href='/app' >
              ButtonAppNew
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/inform'  >
              お知らせ
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/test' >
              TestReact
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/addressList' >
              AddressList
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/addUserAddress' >
              AddAddress
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href='/addTodo' >
              AddTodo
            </Breadcrumbs.Link>
            <Breadcrumbs.Separator />
          </Breadcrumbs.Item>
        </Breadcrumbs.Container>
      </Card>


      <Card
        columnStart="1"
        columnEnd="-1"
      >
        <Router>
          <Routes>
            <Route path="/inform" element={<Inform />} />
            <Route path="/test" element={<MenuExample />} />
          </Routes>
        </Router>
      </Card>

      <Card
        columnStart="1"
        columnEnd="-1"
      >
        Footer
      </Card>
    </Grid>


  );
}
export default NavBar;
