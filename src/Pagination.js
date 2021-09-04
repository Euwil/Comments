class Numeration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalRecords: null,
            pageLimit: 10,
            pageNeighbours: 0
        }
        this.pageLimit = typeof pageLimit === 'number' 
    }
}