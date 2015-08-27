/**
 * $slice
 * 
 * Retorna uma cópia superficial de um array para um novo
 * array a funcao curry
 * 
 * @module $slice
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $slice(['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'], 1, 3);
 * 
 */
this.Ninja.module('$slice', ['$curry'], function ($curry) {
  
  /**
   * Retorna uma cópia superficial de um array para um novo array
   * 
   * @public
   * @method $slice
   * @param {Array} a Colacao de dados que sera recortado
   * @param {Number} b Inicio do range
   * @pramm {Number} c Termino no range
   * @return {Array} Novo array recortado
   * @example
   * 
   *        $slice(['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'], 1, 3);
   * 
   */
  function slice(a, b, c) {
    return [].slice.call(a, b, c);
  }
  
  /**
   * Revelacao do modulo $slice, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(slice);
  
});
