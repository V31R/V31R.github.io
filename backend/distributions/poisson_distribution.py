import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class PoissonDistribution(DistributionTemplate):
    def __init__(self):
        super(PoissonDistribution, self).__init__('Распределение Пуассона')

    def calculate(self, data: pd.Series) -> None:
        mu = 0.5
        self.distribution = np.linspace(stats.poisson.ppf(0.01, mu) * data.min(), stats.poisson.ppf(0.99, mu) * data.max(), len(data))
        self.__mse__(data)