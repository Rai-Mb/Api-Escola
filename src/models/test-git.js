// Test de comandos Git!!!
Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) }