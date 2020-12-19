import { Box, Button, Typography } from '@material-ui/core'
import {useRouter} from 'next/router'
import Link from 'next/link'

import CloseIcon from '@material-ui/icons/Close'

import EditItemForm from '../../../src/containers/edit-item-form/edit-item-form'
import actions from '../../../src/actions/action-creators'

export default function EditItem() {
    const router = useRouter()
    const {item_id} = router.query
    return (
        <Box>
            <Link
            href="/items">
                <Button
                startIcon={<CloseIcon />}>
                     بازگشت
                </Button>
            </Link>
            <EditItemForm itemId={item_id} onSubmitRedirectHref="/items"/>
        </Box>
    )
}