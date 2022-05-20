import {selectAllAlunos, updateAlunos, insertAlunos, putAlunos, deleteAlunos} from './Controllers/Controllers'

const router = Router();

router.get('/', (req,res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando ocm SUCESSO"

    });
});

router.get('/alunos', selectAllAlunos);
router.get('/alunos/:id_aluno', selectIdAlunos);
router.post('/alunos', insertAluno);
router.put('/alunos/:id_aluno',putAlunos);
router.delete('/alunos/:id_aluno', deleteAlunos);

export default router;